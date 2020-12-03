// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PauseMiniLineSvg from '@airclass/icons-svg/lib/asn/PauseMiniLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseMiniLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseMiniLineSvg}></AntdIcon>;
};

PauseMiniLine.displayName = 'PauseMiniLine';
PauseMiniLine.inheritAttrs = false;
export default PauseMiniLine;