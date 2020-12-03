// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArtboardFillSvg from '@airclass/icons-svg/lib/asn/ArtboardFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArtboardFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArtboardFillSvg}></AntdIcon>;
};

ArtboardFill.displayName = 'ArtboardFill';
ArtboardFill.inheritAttrs = false;
export default ArtboardFill;