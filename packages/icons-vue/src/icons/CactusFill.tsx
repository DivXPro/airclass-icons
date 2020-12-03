// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CactusFillSvg from '@airclass/icons-svg/lib/asn/CactusFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CactusFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CactusFillSvg}></AntdIcon>;
};

CactusFill.displayName = 'CactusFill';
CactusFill.inheritAttrs = false;
export default CactusFill;