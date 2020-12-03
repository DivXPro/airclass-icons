// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RssLineSvg from '@airclass/icons-svg/lib/asn/RssLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RssLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RssLineSvg}></AntdIcon>;
};

RssLine.displayName = 'RssLine';
RssLine.inheritAttrs = false;
export default RssLine;