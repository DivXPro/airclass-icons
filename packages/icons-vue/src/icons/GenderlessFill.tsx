// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GenderlessFillSvg from '@airclass/icons-svg/lib/asn/GenderlessFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GenderlessFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GenderlessFillSvg}></AntdIcon>;
};

GenderlessFill.displayName = 'GenderlessFill';
GenderlessFill.inheritAttrs = false;
export default GenderlessFill;