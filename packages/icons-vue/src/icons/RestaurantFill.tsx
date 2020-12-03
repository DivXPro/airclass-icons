// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RestaurantFillSvg from '@airclass/icons-svg/lib/asn/RestaurantFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RestaurantFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RestaurantFillSvg}></AntdIcon>;
};

RestaurantFill.displayName = 'RestaurantFill';
RestaurantFill.inheritAttrs = false;
export default RestaurantFill;