// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PushpinFillSvg from '@airclass/icons-svg/lib/asn/PushpinFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PushpinFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PushpinFillSvg}></AntdIcon>;
};

PushpinFill.displayName = 'PushpinFill';
PushpinFill.inheritAttrs = false;
export default PushpinFill;