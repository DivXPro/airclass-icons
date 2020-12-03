// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DossierFillSvg from '@airclass/icons-svg/lib/asn/DossierFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DossierFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DossierFillSvg}></AntdIcon>;
};

DossierFill.displayName = 'DossierFill';
DossierFill.inheritAttrs = false;
export default DossierFill;