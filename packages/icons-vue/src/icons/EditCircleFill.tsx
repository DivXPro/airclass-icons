// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EditCircleFillSvg from '@airclass/icons-svg/lib/asn/EditCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditCircleFillSvg}></AntdIcon>;
};

EditCircleFill.displayName = 'EditCircleFill';
EditCircleFill.inheritAttrs = false;
export default EditCircleFill;