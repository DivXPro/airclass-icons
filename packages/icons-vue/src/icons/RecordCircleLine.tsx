// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RecordCircleLineSvg from '@airclass/icons-svg/lib/asn/RecordCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RecordCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordCircleLineSvg}></AntdIcon>;
};

RecordCircleLine.displayName = 'RecordCircleLine';
RecordCircleLine.inheritAttrs = false;
export default RecordCircleLine;