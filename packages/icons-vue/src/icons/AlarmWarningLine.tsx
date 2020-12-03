// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlarmWarningLineSvg from '@airclass/icons-svg/lib/asn/AlarmWarningLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlarmWarningLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlarmWarningLineSvg}></AntdIcon>;
};

AlarmWarningLine.displayName = 'AlarmWarningLine';
AlarmWarningLine.inheritAttrs = false;
export default AlarmWarningLine;