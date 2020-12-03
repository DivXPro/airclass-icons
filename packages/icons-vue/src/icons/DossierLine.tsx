// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DossierLineSvg from '@airclass/icons-svg/lib/asn/DossierLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DossierLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DossierLineSvg}></AntdIcon>;
};

DossierLine.displayName = 'DossierLine';
DossierLine.inheritAttrs = false;
export default DossierLine;