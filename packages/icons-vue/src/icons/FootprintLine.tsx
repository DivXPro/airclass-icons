// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FootprintLineSvg from '@airclass/icons-svg/lib/asn/FootprintLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FootprintLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FootprintLineSvg}></AntdIcon>;
};

FootprintLine.displayName = 'FootprintLine';
FootprintLine.inheritAttrs = false;
export default FootprintLine;