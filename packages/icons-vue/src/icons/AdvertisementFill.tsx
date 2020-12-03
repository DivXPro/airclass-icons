// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AdvertisementFillSvg from '@airclass/icons-svg/lib/asn/AdvertisementFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AdvertisementFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AdvertisementFillSvg}></AntdIcon>;
};

AdvertisementFill.displayName = 'AdvertisementFill';
AdvertisementFill.inheritAttrs = false;
export default AdvertisementFill;