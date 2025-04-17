interface IBreadCrumbItem {
  label: string;
  href?: string;
}

export interface ICommonBreadcrumbsProps {
  items: IBreadCrumbItem[];
}
