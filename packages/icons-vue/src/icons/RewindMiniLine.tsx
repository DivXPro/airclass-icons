// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RewindMiniLineSvg from '@airclass/icons-svg/lib/asn/RewindMiniLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RewindMiniLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RewindMiniLineSvg}></AntdIcon>;
};

RewindMiniLine.displayName = 'RewindMiniLine';
RewindMiniLine.inheritAttrs = false;
export default RewindMiniLine;