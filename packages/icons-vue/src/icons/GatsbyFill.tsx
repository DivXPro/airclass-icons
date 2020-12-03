// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GatsbyFillSvg from '@airclass/icons-svg/lib/asn/GatsbyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GatsbyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GatsbyFillSvg}></AntdIcon>;
};

GatsbyFill.displayName = 'GatsbyFill';
GatsbyFill.inheritAttrs = false;
export default GatsbyFill;