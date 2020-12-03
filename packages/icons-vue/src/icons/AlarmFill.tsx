// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlarmFillSvg from '@airclass/icons-svg/lib/asn/AlarmFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlarmFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlarmFillSvg}></AntdIcon>;
};

AlarmFill.displayName = 'AlarmFill';
AlarmFill.inheritAttrs = false;
export default AlarmFill;