// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BasketballLineSvg from '@airclass/icons-svg/lib/asn/BasketballLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BasketballLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BasketballLineSvg}></AntdIcon>;
};

BasketballLine.displayName = 'BasketballLine';
BasketballLine.inheritAttrs = false;
export default BasketballLine;