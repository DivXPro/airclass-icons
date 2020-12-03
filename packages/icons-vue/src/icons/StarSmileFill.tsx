// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StarSmileFillSvg from '@airclass/icons-svg/lib/asn/StarSmileFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarSmileFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarSmileFillSvg}></AntdIcon>;
};

StarSmileFill.displayName = 'StarSmileFill';
StarSmileFill.inheritAttrs = false;
export default StarSmileFill;