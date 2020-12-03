// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RestaurantLineSvg from '@airclass/icons-svg/lib/asn/RestaurantLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RestaurantLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RestaurantLineSvg}></AntdIcon>;
};

RestaurantLine.displayName = 'RestaurantLine';
RestaurantLine.inheritAttrs = false;
export default RestaurantLine;