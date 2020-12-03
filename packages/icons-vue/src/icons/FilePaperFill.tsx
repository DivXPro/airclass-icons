// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FilePaperFillSvg from '@airclass/icons-svg/lib/asn/FilePaperFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilePaperFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilePaperFillSvg}></AntdIcon>;
};

FilePaperFill.displayName = 'FilePaperFill';
FilePaperFill.inheritAttrs = false;
export default FilePaperFill;