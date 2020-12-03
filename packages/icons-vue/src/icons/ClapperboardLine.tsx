// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ClapperboardLineSvg from '@airclass/icons-svg/lib/asn/ClapperboardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClapperboardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClapperboardLineSvg}></AntdIcon>;
};

ClapperboardLine.displayName = 'ClapperboardLine';
ClapperboardLine.inheritAttrs = false;
export default ClapperboardLine;