// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StarSFillSvg from '@airclass/icons-svg/lib/asn/StarSFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarSFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarSFillSvg}></AntdIcon>;
};

StarSFill.displayName = 'StarSFill';
StarSFill.inheritAttrs = false;
export default StarSFill;