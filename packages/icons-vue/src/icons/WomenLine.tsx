// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WomenLineSvg from '@airclass/icons-svg/lib/asn/WomenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WomenLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WomenLineSvg}></AntdIcon>;
};

WomenLine.displayName = 'WomenLine';
WomenLine.inheritAttrs = false;
export default WomenLine;