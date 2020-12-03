// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EditBoxFillSvg from '@airclass/icons-svg/lib/asn/EditBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditBoxFillSvg}></AntdIcon>;
};

EditBoxFill.displayName = 'EditBoxFill';
EditBoxFill.inheritAttrs = false;
export default EditBoxFill;