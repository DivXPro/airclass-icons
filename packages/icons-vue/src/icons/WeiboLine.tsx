// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WeiboLineSvg from '@airclass/icons-svg/lib/asn/WeiboLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WeiboLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeiboLineSvg}></AntdIcon>;
};

WeiboLine.displayName = 'WeiboLine';
WeiboLine.inheritAttrs = false;
export default WeiboLine;