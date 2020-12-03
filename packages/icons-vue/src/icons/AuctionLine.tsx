// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AuctionLineSvg from '@airclass/icons-svg/lib/asn/AuctionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AuctionLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AuctionLineSvg}></AntdIcon>;
};

AuctionLine.displayName = 'AuctionLine';
AuctionLine.inheritAttrs = false;
export default AuctionLine;