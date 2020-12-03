// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AdvertisementLineSvg from '@airclass/icons-svg/lib/asn/AdvertisementLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AdvertisementLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AdvertisementLineSvg}></AntdIcon>;
};

AdvertisementLine.displayName = 'AdvertisementLine';
AdvertisementLine.inheritAttrs = false;
export default AdvertisementLine;