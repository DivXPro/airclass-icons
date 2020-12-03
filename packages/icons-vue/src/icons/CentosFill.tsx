// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CentosFillSvg from '@airclass/icons-svg/lib/asn/CentosFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CentosFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CentosFillSvg}></AntdIcon>;
};

CentosFill.displayName = 'CentosFill';
CentosFill.inheritAttrs = false;
export default CentosFill;