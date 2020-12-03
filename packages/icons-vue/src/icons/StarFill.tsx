// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StarFillSvg from '@airclass/icons-svg/lib/asn/StarFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarFillSvg}></AntdIcon>;
};

StarFill.displayName = 'StarFill';
StarFill.inheritAttrs = false;
export default StarFill;