// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EvernoteFillSvg from '@airclass/icons-svg/lib/asn/EvernoteFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EvernoteFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EvernoteFillSvg}></AntdIcon>;
};

EvernoteFill.displayName = 'EvernoteFill';
EvernoteFill.inheritAttrs = false;
export default EvernoteFill;