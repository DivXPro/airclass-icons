// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BaiduLineSvg from '@airclass/icons-svg/lib/asn/BaiduLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BaiduLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BaiduLineSvg}></AntdIcon>;
};

BaiduLine.displayName = 'BaiduLine';
BaiduLine.inheritAttrs = false;
export default BaiduLine;