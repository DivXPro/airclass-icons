// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlugFillSvg from '@airclass/icons-svg/lib/asn/PlugFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlugFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlugFillSvg}></AntdIcon>;
};

PlugFill.displayName = 'PlugFill';
PlugFill.inheritAttrs = false;
export default PlugFill;