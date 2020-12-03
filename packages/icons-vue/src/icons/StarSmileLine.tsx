// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StarSmileLineSvg from '@airclass/icons-svg/lib/asn/StarSmileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarSmileLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarSmileLineSvg}></AntdIcon>;
};

StarSmileLine.displayName = 'StarSmileLine';
StarSmileLine.inheritAttrs = false;
export default StarSmileLine;