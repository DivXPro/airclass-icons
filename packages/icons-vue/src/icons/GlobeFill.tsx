// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GlobeFillSvg from '@airclass/icons-svg/lib/asn/GlobeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobeFillSvg}></AntdIcon>;
};

GlobeFill.displayName = 'GlobeFill';
GlobeFill.inheritAttrs = false;
export default GlobeFill;