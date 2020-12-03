// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlayMiniLineSvg from '@airclass/icons-svg/lib/asn/PlayMiniLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayMiniLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayMiniLineSvg}></AntdIcon>;
};

PlayMiniLine.displayName = 'PlayMiniLine';
PlayMiniLine.inheritAttrs = false;
export default PlayMiniLine;