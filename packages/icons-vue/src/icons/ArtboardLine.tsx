// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArtboardLineSvg from '@airclass/icons-svg/lib/asn/ArtboardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArtboardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArtboardLineSvg}></AntdIcon>;
};

ArtboardLine.displayName = 'ArtboardLine';
ArtboardLine.inheritAttrs = false;
export default ArtboardLine;