// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GiftLineSvg from '@airclass/icons-svg/lib/asn/GiftLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GiftLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftLineSvg}></AntdIcon>;
};

GiftLine.displayName = 'GiftLine';
GiftLine.inheritAttrs = false;
export default GiftLine;