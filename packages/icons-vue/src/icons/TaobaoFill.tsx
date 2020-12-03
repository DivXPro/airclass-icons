// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TaobaoFillSvg from '@airclass/icons-svg/lib/asn/TaobaoFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaobaoFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaobaoFillSvg}></AntdIcon>;
};

TaobaoFill.displayName = 'TaobaoFill';
TaobaoFill.inheritAttrs = false;
export default TaobaoFill;