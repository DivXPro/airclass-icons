// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlarmWarningFillSvg from '@airclass/icons-svg/lib/asn/AlarmWarningFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlarmWarningFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlarmWarningFillSvg}></AntdIcon>;
};

AlarmWarningFill.displayName = 'AlarmWarningFill';
AlarmWarningFill.inheritAttrs = false;
export default AlarmWarningFill;