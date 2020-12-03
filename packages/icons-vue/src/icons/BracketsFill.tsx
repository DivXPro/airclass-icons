// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BracketsFillSvg from '@airclass/icons-svg/lib/asn/BracketsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BracketsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BracketsFillSvg}></AntdIcon>;
};

BracketsFill.displayName = 'BracketsFill';
BracketsFill.inheritAttrs = false;
export default BracketsFill;