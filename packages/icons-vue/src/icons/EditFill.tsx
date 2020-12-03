// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EditFillSvg from '@airclass/icons-svg/lib/asn/EditFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditFillSvg}></AntdIcon>;
};

EditFill.displayName = 'EditFill';
EditFill.inheritAttrs = false;
export default EditFill;