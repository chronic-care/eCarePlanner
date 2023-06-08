import { Effective, GenericType, GoalTarget, MccDate } from '../generated-data-api';

export function getInnerValue(value: GenericType): any {
  let rval: any = 0;

  if (isNaN(rval)) {
    rval = 0;
  }

  if (value !== undefined) {
    switch (value.valueType) {
      case 'String': {
        rval = value.stringValue;
        break;
      }
      case 'Integer': {
        rval = value.integerValue;
        break;
      }
      case 'Boolean': {
        rval = value.booleanValue;
        break;
      }
      case 'Quantity': {
        rval = value.quantityValue.value;
        break;
      }
      case 'Range': {
        rval = value.quantityValue.value;
        break;
      }
    }
  }
  return rval;
}

export function getDisplayValue(value: GenericType): any {
  let formatted = 'Unknown Type: ';
  let rval = 0;

  if (isNaN(rval)) {
    rval = 0;
  }

  if (value !== undefined) {
    formatted += ' ' + value.valueType;
    switch (value.valueType) {
      case 'String': {
        formatted = value.stringValue;
        break;
      }
      case 'Integer': {
        formatted = value.integerValue.toString();
        break;
      }
      case 'Boolean': {
        formatted = String(value.booleanValue);
        break;
      }
      case 'boolean': {
        formatted = String(value.booleanValue);
        break;
      }
      case 'CodeableConcept': {
        formatted = value.codeableConceptValue.text;
        break;
      }
      case 'Quantity': {
        formatted = value.quantityValue.value + ' ' + (value.quantityValue.unit ? value.quantityValue.unit : "");
        break;
      }
      case 'Range': {
        formatted = value.rangeValue.low.value
          + ' - ' + value.rangeValue.high.value
          + ' ' + value.rangeValue.high.unit;
        break;
      }
      case "decimal": {
        formatted = value.decimalValue.toString();
        break;
      }
      case "string":
        formatted = value.stringValue;
        break;
    }
    return formatted;
  }
}

export function formatEffectiveDate(ef: Effective): string {
  if (!ef) {
    return "";
  }
  if (ef.dateTime && ef.dateTime.date) {
    const date = new Date(ef.dateTime.date);
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
      .toISOString()
      .split('T')[0];
  }
}

export function formatMccDate(mccDate: MccDate): string {
  if (!mccDate) {
    return "";
  }
  if (mccDate.date) {
    const date = new Date(mccDate.date);
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
      .toISOString()
      .split('T')[0];
  }
}

export function formatGoalTargetValue(target: GoalTarget, mostRecentResultValue: string): any[] {
  let formatted = 'Unknown Type: ';
  let highlighted = false;
  let rval = 0;
  let qval = 0;
  let highval = 0;
  let lowval = 0;

  rval = Number(mostRecentResultValue);
  if (isNaN(rval)) {
    rval = 0;
  }

  if (target.value !== undefined) {
    formatted += ' ' + target.value.valueType;
    switch (target.value.valueType) {
      case 'String': {
        formatted = target.value.stringValue;
        break;
      }
      case 'integer': {
        formatted = target.value.integerValue.toString();
        break;
      }
      case 'boolean': {
        formatted = String(target.value.booleanValue);
        break;
      }
      case 'CodeableConcept': {
        formatted = target.value.codeableConceptValue.text;
        break;
      }
      case 'Quantity': {
        formatted = target.value.quantityValue.comparator
          + target.value.quantityValue.value.toString()
          + ' ' + target.value.quantityValue.unit;
        qval = Number(target.value.quantityValue.value);
        if (!isNaN(qval)) {
          if (target.value.quantityValue.comparator === '<') {
            if (rval >= qval) {
              highlighted = true;
            }
          }
          if (target.value.quantityValue.comparator === '>') {
            if (rval <= qval) {
              highlighted = true;
            }
          }
          if (target.value.quantityValue.comparator === '=') {
            if (rval !== qval) {
              highlighted = true;
            }
          }
        }
        break;
      }
      case 'Range': {
        formatted = target.value.rangeValue.low.value
          + ' - ' + target.value.rangeValue.high.value
          + ' ' + target.value.rangeValue.high.unit;

        highval = Number(target.value.rangeValue.high.value);
        lowval = Number(target.value.rangeValue.low.value);
        if (!isNaN(lowval) && !isNaN(highval)) {
          if (rval < lowval || rval > highval) {
            highlighted = true;
          }
        }
        break;
      }
      case 'Ratio': {
        // todo:  formatTargetValue Ratio
        console.log('Not yet supported Target Value Type: '.concat(target.value.valueType));
        break;
      }
      case 'Period': {
        // todo:  formatTargetValue Period
        console.log('Not yet supported Target Value Type: '.concat(target.value.valueType));
        break;
      }
      case 'date': {
        // todo:  formatTargetValue Date
        console.log('Not yet supported Target Value Type: '.concat(target.value.valueType));
        break;
      }
      case 'time': {
        // todo:  formatTargetValue Time
        console.log('Not yet supported Target Value Type: '.concat(target.value.valueType));
        break;
      }
      case 'dateTime': {
        // todo:  formatTargetValue DateTime
        console.log('Not yet supported Target Value Type: '.concat(target.value.valueType));
        break;
      }
      case 'SampledData': {
        // todo:  formatTargetValue SampledData
        console.log('Not yet supported Target Value Type: '.concat(target.value.valueType));
        break;
      }
      case 'DurationValue': {
        // todo:  formatTargetValue DurationValue
        console.log('Not yet supported Target Value Type: '.concat(target.value.valueType));
        break;
      }
      case 'TimingValue': {
        // todo:  formatTargetValue TimingValue
        console.log('Not yet supported Target Value Type: '.concat(target.value.valueType));
        break;
      }
      case 'InstantValue': {
        // todo:  formatTargetValue InstantValue
        console.log('Not yet supported Target Value Type: '.concat(target.value.valueType));
        break;
      }
      case 'IdentifierValue': {
        // todo:  formatTargetValue IdentifierValue
        console.log('Not yet supported Target Value Type: '.concat(target.value.valueType));
        break;
      }
      default:
        {
          console.log('Unknown Target Value Type: '.concat(target.value.valueType));
          break;
        }
    }
  }

  return [formatted, highlighted];

}

export function reformatYYYYMMDD(dt): string {
  return dt;
  if (dt) {
    const date = new Date(dt);
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
      .toISOString()
      .split('T')[0];
  } else {
    return '';
  }
}

export function getLineChartOptionsObject(min?: number, max?: number, suggestedMinDate?: any, suggestedMaxDate?: any): {} {
  const opts =
  {
    elements: {
      line: {
        tension: 0
      }
    },
    responsive: false,
    maintainAspectRatio: true,
    scales: {
      yAxes: [(min && max) ? ({
        ticks: {
          suggestedMax: max,
          suggestedMin: min
        }
      }) : ({})],
      xAxes: [{
        type: 'time',
        distribution: 'linear',
        ticks: {
          // min: suggestedMinDate,
          // max: suggestedMaxDate,
          maxTicksLimit: 7
        },
        time: {
          // unit: 'month',
          // format: 'dateFormat',
          displayFormats: {
            millisecond: 'D MMM, h:mm a',
            second: 'D MMM, h:mm a',
            minute: 'D MMM, h:mm a',
            hour: 'D MMM, h:mm a',
            day: 'D MMM',
            week: 'll',
            month: 'MMM',
            quarter: 'll',
            year: 'll'
          },
          tooltipFormat: 'MM-DD-YYYY',
        }
      }]
    }
  };

  /*
            millisecond: 'MMM DD',
            second: 'MMM DD',
            minute: 'MMM DD',
            hour: 'MMM DD',
            day: 'MMM DD',
            week: 'MMM DD',
            month: 'MMM DD',
            quarter: 'MMM DD',
            year: 'MMM DD',
   */

  return opts;
}

export function getEgrLineChartAnnotationsObject() {
  const annotations = {
    annotations: [
      {
        drawTime: 'beforeDatasetsDraw',
        type: 'box',
        id: 'egfr-critical',
        xScaleID: 'x-axis-0',
        yScaleID: 'y-axis-0',
        borderWidth: 0,
        yMin: 0,
        yMax: 15,
        backgroundColor: 'rgba(227, 127, 104,0.3)'
      },
      {
        drawTime: 'beforeDatasetsDraw',
        type: 'box',
        id: 'egfr-ok',
        xScaleID: 'x-axis-0',
        yScaleID: 'y-axis-0',
        borderWidth: 0,
        yMin: 15,
        yMax: 60,
        backgroundColor: 'rgba(247, 245, 116,0.3)'
      },
      {
        drawTime: 'beforeDatasetsDraw',
        type: 'box',
        id: 'egfr-warning',
        xScaleID: 'x-axis-0',
        yScaleID: 'y-axis-0',
        borderWidth: 0,
        yMin: 60,
        backgroundColor: 'rgba(128, 204, 113,0.3)'
      }
    ]
  };
  return annotations;
}

export function getUacrLineChartAnnotationsObject() {
  const annotations = {
    annotations: [{
      drawTime: 'beforeDatasetsDraw',
      type: 'box',
      id: 'uacr-warning',
      xScaleID: 'x-axis-0',
      yScaleID: 'y-axis-0',
      borderWidth: 0,
      yMin: 0,
      yMax: 30,
      backgroundColor: 'rgba(128, 204, 113,0.3)'
    },
    {
      drawTime: 'beforeDatasetsDraw',
      type: 'box',
      id: 'uacr-ok',
      xScaleID: 'x-axis-0',
      yScaleID: 'y-axis-0',
      borderWidth: 0,
      yMin: 30,
      yMax: 300,
      backgroundColor: 'rgba(247, 245, 116,0.3)'
    },
    {
      drawTime: 'beforeDatasetsDraw',
      type: 'box',
      id: 'uacr-critical',
      xScaleID: 'x-axis-0',
      yScaleID: 'y-axis-0',
      borderWidth: 0,
      yMin: 300,
      backgroundColor: 'rgba(227, 127, 104,0.3)'
    }
    ]
  };
  return annotations;
}

export function getWotLineChartAnnotationsObject() {
  const annotations = {
    annotations: [{
      drawTime: 'beforeDatasetsDraw',
      type: 'box',
      id: 'wot-warning',
      xScaleID: 'x-axis-0',
      yScaleID: 'y-axis-0',
      borderWidth: 0,
      yMin: 50,
      yMax: 105,
      backgroundColor: 'rgba(128, 204, 113,0.3)'
    },
    {
      drawTime: 'beforeDatasetsDraw',
      type: 'box',
      id: 'wot-ok',
      xScaleID: 'x-axis-0',
      yScaleID: 'y-axis-0',
      borderWidth: 0,
      yMin: 105,
      yMax: 260,
      backgroundColor: 'rgba(247, 245, 116,0.3)'
    },
    {
      drawTime: 'beforeDatasetsDraw',
      type: 'box',
      id: 'wot-critical',
      xScaleID: 'x-axis-0',
      yScaleID: 'y-axis-0',
      borderWidth: 0,
      yMin: 260,
      backgroundColor: 'rgba(227, 127, 104,0.3)'
    }
    ]
  };
  return annotations;
}

export function formatEgfrResult(egfr: number, unit: string): string {
  let ret = '';
  if (egfr && unit) {
    ret = egfr.toString() + ' '
      + unit.substring(0, unit.length - 1)
      + '<sup>' + unit.substring(unit.length - 1) + '</sup>';
  }
  else if (egfr && !unit) {
    ret = egfr.toString() + ' ' + 'mL/min/1.73m<sup>2</sup>';
  }
  return ret;
}

export function formatUacrResult(uacr: number, unit: string): string {
  let ret = '';
  if (uacr && unit) {
    ret = uacr.toString() + ' ' + unit;
  }
  return ret;
}

export function formatWotResult(value: number, unit: string): string {
  let ret = '';
  if (value && unit) {
    ret = value.toString() + ' ' + unit;
  }
  return ret;
}
