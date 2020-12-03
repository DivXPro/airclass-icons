// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AliensLineSvg from '@airclass/icons-svg/lib/asn/AliensLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AliensLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AliensLineSvg}></AntdIcon>;
};

AliensLine.displayName = 'AliensLine';
AliensLine.inheritAttrs = false;
export default AliensLine;