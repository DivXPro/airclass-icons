// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BarricadeFillSvg from '@airclass/icons-svg/lib/asn/BarricadeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarricadeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarricadeFillSvg}></AntdIcon>;
};

BarricadeFill.displayName = 'BarricadeFill';
BarricadeFill.inheritAttrs = false;
export default BarricadeFill;