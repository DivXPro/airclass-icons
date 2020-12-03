// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ProductHuntLineSvg from '@airclass/icons-svg/lib/asn/ProductHuntLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProductHuntLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProductHuntLineSvg}></AntdIcon>;
};

ProductHuntLine.displayName = 'ProductHuntLine';
ProductHuntLine.inheritAttrs = false;
export default ProductHuntLine;