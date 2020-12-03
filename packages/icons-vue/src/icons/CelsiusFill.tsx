// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CelsiusFillSvg from '@airclass/icons-svg/lib/asn/CelsiusFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CelsiusFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CelsiusFillSvg}></AntdIcon>;
};

CelsiusFill.displayName = 'CelsiusFill';
CelsiusFill.inheritAttrs = false;
export default CelsiusFill;