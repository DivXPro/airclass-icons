// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ClapperboardFillSvg from '@airclass/icons-svg/lib/asn/ClapperboardFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClapperboardFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClapperboardFillSvg}></AntdIcon>;
};

ClapperboardFill.displayName = 'ClapperboardFill';
ClapperboardFill.inheritAttrs = false;
export default ClapperboardFill;