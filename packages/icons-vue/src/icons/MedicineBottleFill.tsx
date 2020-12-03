// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MedicineBottleFillSvg from '@airclass/icons-svg/lib/asn/MedicineBottleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MedicineBottleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedicineBottleFillSvg}></AntdIcon>;
};

MedicineBottleFill.displayName = 'MedicineBottleFill';
MedicineBottleFill.inheritAttrs = false;
export default MedicineBottleFill;