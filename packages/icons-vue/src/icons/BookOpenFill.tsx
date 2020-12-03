// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookOpenFillSvg from '@airclass/icons-svg/lib/asn/BookOpenFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookOpenFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookOpenFillSvg}></AntdIcon>;
};

BookOpenFill.displayName = 'BookOpenFill';
BookOpenFill.inheritAttrs = false;
export default BookOpenFill;