// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SdCardMiniLineSvg from '@airclass/icons-svg/lib/asn/SdCardMiniLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SdCardMiniLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SdCardMiniLineSvg}></AntdIcon>;
};

SdCardMiniLine.displayName = 'SdCardMiniLine';
SdCardMiniLine.inheritAttrs = false;
export default SdCardMiniLine;